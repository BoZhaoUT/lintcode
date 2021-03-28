class GFSClient {
    constructor(chunkSize) {
        // the max number of characters in a chunk
        this.chunkSize = chunkSize
        // { filename: { chunkIndex: content } } 
        this.storage = {}
    }

    read(filename) {
        const fileContent = this.storage[filename]

        // filename doesn't exist
        if (fileContent === undefined) {
            return null
        }

        let result = ""
        let i = 0
        while (fileContent[i] !== undefined) {
            result += fileContent[i]
            i++
        }
        return result
    }

    write(filename, content) {
        this.storage[filename] = {}
        let startIndex = 0
        let endIndex = startIndex + this.chunkSize
        let i = 0
        while (startIndex < content.length) {
            this.writeChunk(filename, i, content.slice(startIndex, endIndex))
            i++
            startIndex = endIndex
            endIndex = startIndex + this.chunkSize
        }
    }

    readChunk(filename, chunkIndex) {
        if (this.storage[filename]) {
            return this.storage[filename][chunkIndex]
        }
    }

    writeChunk(filename, chunkIndex, chunkData) {
        this.storage[filename][chunkIndex] = chunkData
    }
}

const gsf = new GFSClient(5)
console.log(gsf.read("a.txt")) // null

gsf.write("a.txt", "World")
console.log(gsf.read("a.txt")) // "World"

gsf.write("b.txt", "111112222233")
gsf.write("b.txt", "aaaaabbbbb")

console.log(gsf.read("b.txt")) // "aaaaabbbbb"
