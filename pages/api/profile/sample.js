// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
  res.status(200).json({ status: 200, message: "Hello, world!" })
}

export default handler