const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { models } = require('./src/models');

const app = express();

app.use(logger('dev'));
app.use(logger('  - :date[web]'));
app.use(logger('  - :referrer'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.disable('etag');

//  Helper functions
const createTag = async tag => {
  const newTag = new models.Tag({ title: tag.title, titleLowerCase: tag.title });
  await newTag.save();
  return newTag;
};

const checkIfTagExists = (req, tip, tags) => {
  return new Promise(async (resolve, reject) => {
    let tagIds = [];
    await Promise.all(
      tags.map(async tag => {
        const query = await req.context.models.Tag.find({ title: tag.title });
        if (query.length < 1) {
          newTag = createTag(tag);
          tagIds.push(newTag._id);
        } else {
          tagIds.push(query[0]._id);
        }
      }),
    );

    resolve(tagIds);
  });
};

const attachTags = (req, tip, tags) => {
  return new Promise(async (resolve, reject) => {
    const tagIds = await checkIfTagExists(req, tip, tags);
    tagIds.forEach(tag => {
      tip.tags.push(tag);
    });
    resolve();
  });
};

app.get('/test', (req, res) => {
  res.send('yay!');
});

// app.get('/tips', async (req, res) => {
//   const tips = await req.context.models.Tip.find();
//   res.status(200);
//   res.json(tips);
// });

app.get('/tips/:page?', async (req, res) => {
  const page = req.params.page || 1;
  const tips = await req.context.models.Tip.paginate({}, { page, limit: 3 });
  res.status(200);
  res.json(tips);
});

app.post('/tips', async (req, res) => {
  try {
    const { title, desc, link, tags } = req.body;
    const tip = new models.Tip({ title, desc, link });
    if (tags) {
      await attachTags(req, tip, tags);
      tip.tags;
    }

    await tip.save();

    res.send(tip);
  } catch (err) {
    res.status(400);
    res.send(err.message);
  }
});

//  separate tag names with &
app.get('/tips/tags/:tagNames', async (req, res) => {
  const tagNames = req.params.tagNames.toLowerCase().split('&');

  const query = await req.context.models.Tag.find({ titleLowerCase: { $in: tagNames } });

  const tips = await req.context.models.Tip.find({ tags: { $all: query } }, (err, tip) => {});
  tips.filter(tip => {
    query.every(tag => tip.tags.includes(tag._id));
  });

  res.status(200);
  res.json(tips);
});

app.delete('/tips/:tipId', async (req, res) => {
  const tips = req.params.tipId.split('&');
  const result = async () => {
    return Promise.all(tips.map(async tip => await req.context.models.Tip.findByIdAndRemove(tip)));
  };
  result().then(data => {
    res.send(data);
  });
});

app.get('/tags', async (req, res) => {
  const tags = await req.context.models.Tag.find();
  res.status(200);
  res.json(tags);
});

app.delete('/tags/:tagId', async (req, res) => {
  const tags = req.params.tagId.split('&');
  const result = async () => {
    return Promise.all(tags.map(async tag => await req.context.models.Tag.findByIdAndRemove(tag)));
  };
  result().then(data => {
    res.send(data);
  });
});

module.exports = app;
