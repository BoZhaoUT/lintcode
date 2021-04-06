class PubSubPattern {
    constructor() {
        this.channelToSubscribers = {}
    }

    subscribe(channel, user) {
        if (this.channelToSubscribers[channel] === undefined) {
            this.channelToSubscribers[channel] = new Set()
        }
        this.channelToSubscribers[channel].add(user)
    }

    unsubscribe(channel, user) {
        if (this.channelToSubscribers[channel] !== undefined) {
            this.channelToSubscribers[channel].delete(user)
        }
    }

    publish(channel, message) {
        if (this.channelToSubscribers[channel]) {
            this.channelToSubscribers[channel].forEach(user => {
                console.log(`user ${user} received "${message}"`)
            })
        }
    }
}

const pubSubPattern = new PubSubPattern()

pubSubPattern.subscribe("group1", 1)
pubSubPattern.publish("group1", "hello")

pubSubPattern.subscribe("group1", 2)
pubSubPattern.publish("group1", "thank you")

pubSubPattern.unsubscribe("group2", 3)

pubSubPattern.unsubscribe("group1", 1)
pubSubPattern.publish("group2", "thank you very much")
