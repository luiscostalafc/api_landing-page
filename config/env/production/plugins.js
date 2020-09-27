module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: env("América do Sul (São Paulo)"),
      params: {
        Bucket: env("my-bucket")
      }
    }
  }
})