// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
  if (req.method != 'GET') {
    res.status(404).json({ status: 404, message: "Method not available" })
    return
  }

  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
  const data = await response.json()
  const joke = data?.joke ?? 'No joke available'

  res.status(200).json({ status: 200, joke })
}

export default handler