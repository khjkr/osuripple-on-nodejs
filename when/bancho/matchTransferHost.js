module.exports = (userToken, packetData) => {
  packetData = utils.clientPackets.transferHost(packetData)
  let userID = userToken.userid

  let matchID = userToken.matchID

  if (matchID === -1) {
    return undefined
  }

  if (!(matchID in share.matches.matches)) {
    return undefined
  }

  let match = share.matches.matches[matchID]
  if (userID !== match.hostUserID) {
    return undefined
  }

  match.transferHost(packetData.slotID)
}

const share = require('../../share')
const utils = require('../../utils')
