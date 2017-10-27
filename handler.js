'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const params = { Bucket: 'photo-bucket-tmp-prjct'};

s3.listObjects(params, module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'shhinei',
      input: event,
    }),
  };

  callback(null, response);
});
