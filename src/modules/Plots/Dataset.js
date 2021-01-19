import { DataFrame } from 'dataframe-js'

class Dataset {
  constructor (data) {
    this._data = data
  }

  convertDataToDataframe () {
    return new DataFrame(this._data)
  }
}

export default Dataset
