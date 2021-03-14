import S3 from "react-aws-s3";

export const uploadToS3 = (file) => {
  const config = {
    bucketName: "mywebsiteflowersmusic",
    dirName: "images" /* optional */,
    region: "eu-west-1",
    accessKeyId: "AKIA6DOUNMJ2Z6M6LAT4",
    secretAccessKey: "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",
    s3Url: "https://mywebsiteflowersmusic.s3-eu-west-1.amazonaws.com/",
  };

  const ReactS3Client = new S3(config);
  /*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */

  /* This is optional */
  const fileNumber = Math.floor(Math.random() * 1000);
  const newFileName = `image-${fileNumber}`;
  let url = "";

  ReactS3Client.uploadFile(file, newFileName)
    .then((response) => {
      console.log(response.location);
      url = response.location;
    })
    .catch((err) => console.error(err));

  const returnValue = () => {
    return url;
  };

  return returnValue();
};

/**
 * {
 *   Response: {
 *     bucket: "myBucket",
 *     key: "image/test-image.jpg",
 *     location: "https://myBucket.s3.amazonaws.com/media/test-file.jpg"
 *   }
 * }
 */
// });
