const { asyncBufferFromFile, parquetRead } = await import('hyparquet')

const filename = "./data/0000.parquet"

function convert(input) {
    console.log(typeof input[2])
    console.log({
        title: input[0],
        body: input[1],
        vote: input[2],
        replary: input[3].map(i => ({
            text: i.body,
            vote: i.score
        }))
    })
}

await parquetRead({
    file: await asyncBufferFromFile(filename),
    onComplete: data => convert(data[0])
})