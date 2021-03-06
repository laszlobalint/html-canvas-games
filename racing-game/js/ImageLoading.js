let firstCarPicture = document.createElement('img');
let secondCarPicture = document.createElement('img');
let trackPics = [];
let picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
  picsToLoad--;
  if (picsToLoad == 0) startGameAfterLoading();
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload = countLoadedImagesAndLaunchIfReady;
  imgVar.src = `images/${fileName}`;
}

function loadImageForTrackCode(trackCode, fileName) {
  trackPics[trackCode] = document.createElement('img');
  beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages() {
  let imageList = [
    { varName: firstCarPicture, theFile: 'player_one.png' },
    { varName: secondCarPicture, theFile: 'player_two.png' },
    { trackType: TRACK_ROAD, theFile: 'track_road.png' },
    { trackType: TRACK_WALL, theFile: 'track_wall.png' },
    { trackType: TRACK_GOAL, theFile: 'track_goal.png' },
    { trackType: TRACK_TREE, theFile: 'track_tree.png' },
    { trackType: TRACK_FLAG, theFile: 'track_flag.png' },
  ];

  picsToLoad = imageList.length;

  for (let i = 0; i < imageList.length; i++) {
    if (imageList[i].varName != undefined) {
      beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    } else {
      loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
    }
  }
}
