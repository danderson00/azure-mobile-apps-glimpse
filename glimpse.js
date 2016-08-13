module.exports = {
    init: function () {
        var glimpseAgent = require('glimpse-node-agent'),
            glimpseServer = require('glimpse-node-server')

        glimpseServer.server.init()
        glimpseAgent.agent.init({
            server: glimpseServer.server
        })
    }
}
