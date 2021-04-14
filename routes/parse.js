const fetch = require('node-fetch')

module.exports = async (req, res) => {
  const {url} = req.body
  try {
    const redirect_url = await fetch(url).then(res => res.url)
    const id = redirect_url.match(/video\/(\S*)\/\?region/)[1]
    const {item_list: [{video: {play_addr: {url_list: [videoUrl]}}}]} = await fetch(`https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=${id}`).then(res => res.json())
    const replace_url = videoUrl.replace('playwm', 'play')
    const final_url = await fetch(replace_url).then(res => res.url)
    res.json({
      status: 200,
      url: final_url,
    })
  } catch (e) {
    res.json({
      status: 400,
      error: e.message
    })
  }
}
