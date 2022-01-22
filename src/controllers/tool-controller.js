'use strict';

const mongoose = require("mongoose");
const Tools = mongoose.model('Tools');

exports.post = (req, res, next) => {
  var tool = new Tools(req.body);
  tool.save().then(x => {
    res.status(201).send({
      message: "Created!",
      Tool: req.body
    });
  }).catch(e => {
    res.status(400).send({
      message: "Something went wrong!",
      data: e
    });
  });
};

exports.get = (req, res, next) => {
  Tools.find({}, 'title link description tags').then(data => {
    res.status(200).send(data);
  }).catch(e => {
    res.status(400).send({
      message: "Something went wrong!",
      data: e
    });
  });
}

exports.getByTags = (req, res, next) => {
  Tools.find({ tags: req.params.tags }, 'title link description tags').then(data => {
    res.status(200).send(data);
  }).catch(e => {
    res.status(400).send({
      message: "Something went wrong!",
      data: e
    });
  });
}

exports.put = (req, res, next) => {
  Tools.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      link: req.body.link,
      description: req.body.description,
      tags: req.body.tags
    }
  }).then(x => {
    res.status(200).send({
      message: "Successfully updated!",
      Tool: req.body
    });
  }).catch(e => {
    res.status(400).send({
      message: "Something went wrong!",
      data: e
    });
  });
};

exports.delete = (req, res, next) => {
  Tools.findOneAndRemove(req.params.id).then(x => {
    res.status(200).send({});
  }).catch(e => {
    res.status(400).send({
      message: "Something went wrong!",
      data: e
    });
  });
};