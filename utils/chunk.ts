const chunk = (arr: Array<{}>, size: number) => {
  const chunks = []
  const n = arr.length
  let i = 0

  while (i < n) {
    chunks.push(arr.slice(i, (i += size)))
  }

  return chunks
}

export default chunk
