// import {PutObjectCommand, S3CLIENT} from '@aws-sdk/client-s3';
import uniqid from 'uniqid';

export async function POST(req){
  const data = await req.formData();
  if (data.get('file')) {
    console.log('We have a file', data.get('file'));

    // const file = data.get('file');
    
    // const seClient = new S3CLIENT({
    //   region: 'us-east-1',
    //   credentials: {
    //     accessKeyId: process.env.AWS_ACCESS_KEY,
    //     secretAccessKey: process.env.AWS_SECRET_KEY
    //   }
    // });

    // const ext = file.name.split('.').slice(-1)[0];
    // const newFileName = uniqid() + '.' + ext;

    // const chunks = [];
    // for await (const chunk of file.stream()) {
    //   chunks.push(chunk);
    // }

    // const buffer = Buffer.concat(chunks);

    // await S3CLIENT.send(new PutObjectCommand({
    //   Bucket: 'pizza-app',
    //   Key: newFileName,
    //   ACL: 'public-read',
    //   ContentType: file.type,
    //   Body: buffer
    // }));

    // const link = 'https://pizza-app.s3.amazonaws.com/'+newFileName;
    // return Response.json(link);

  }

  return Response.json(true)
}