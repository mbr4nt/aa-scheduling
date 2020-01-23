var fakeData = {
  9: [
    {
      DateTimeScheduled: new Date(2020, 1, 5),
      AssetName: "Some email!",
      CampaignAssetID: 1
    },
    {
      DateTimeScheduled: new Date(2020, 1, 6),
      AssetName: "Some email 5!",
      CampaignAssetID: 2
    }
  ],
  10: [
    {
      DateTimeScheduled: new Date(2020, 1, 7),
      AssetName: "Some cool email!",
      CampaignAssetID: 3
    },
    {
      DateTimeScheduled: new Date(2020, 1, 8),
      AssetName: "Some not so cool email :(",
      CampaignAssetID: 4
    },
    {
      DateTimeScheduled: new Date(2020, 1, 9),
      AssetName: "best email ever!",
      CampaignAssetID: 5
    }
  ]
};

export default class {
  getCampaigns(marketingGroupID, callback) {
    setTimeout(function() {
      callback([
        {
          MasterCampaignID: 9,
          Name: "One campaign"
        },
        {
          MasterCampaignID: 10,
          Name: "Another campaign"
        }
      ]);
    }, 400);
  }

  getSchedule(masterCampaignID, callback) {
    setTimeout(function() {
      callback(fakeData[masterCampaignID]);
    }, 400);
  }

  cancelPost(campaignAssetID, callback) {
    setTimeout(function() {
      console.log("canceling", campaignAssetID);
      Object.keys(fakeData).forEach(key => {
        var list = fakeData[key];
        list.forEach((item, index) => {
          if (item.CampaignAssetID == campaignAssetID) {
            list.splice(index, 1);
          }
        });
      });
      callback();
    }, 400);
  }

  scheduleCampaing(masterCampaignID, assetID) {
    setTimeout(function() {
      console.log("scheduling!!", masterCampaignID, assetID);
      callback();
    }, 400);
  }
}
