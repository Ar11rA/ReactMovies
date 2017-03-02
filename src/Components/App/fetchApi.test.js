import getData from './fetchDataApi.js'
it ('will return array of actors', () => {
  const actorArray = []
  getData('movies-ref').then((res) => {
    let ctr = 0
    res.data.forEach((item) => {
      let tempArr = (item.actors)
      for (let iter1 = 0; iter1 < tempArr.length; iter1++) {
        let tempAct = tempArr[iter1]
        let flag = true
        for (let iter2 = 0; iter2 < actorArray.length; iter2++) {
          if (tempAct === actorArray[iter2]) {
            flag = false
            break
          }
        }
        if (flag) {
          actorArray[ctr++] = tempAct
        }
      }
    })
  })
  expect(actorArray instanceof Array).toBe(true)
})