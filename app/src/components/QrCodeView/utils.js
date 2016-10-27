const qr = require('qr-image')

export const createQRPNGBase64 = (text) => {
  return new Promise((resolve, reject) => {
    let buffers = []
    qr.image(text, {
      format: 'svg'
    }).on('data', buffer => buffers.push(buffer))
    .on('end', _ => {
      let buffer = Buffer.concat(buffers)
      let dataUri = `data:image/svg;base64,${buffer.toString('base64')}`
      resolve(dataUri)
    }).on('error', reject)
  })
}
