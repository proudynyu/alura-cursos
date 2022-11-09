import {parseTimeToSeconds} from './time'

describe('parseDateToSeconds suite', () => {
  it('should return the time passed in seconds', () => {
    const mockedTime = "01:00:00"

    const seconds = parseTimeToSeconds(mockedTime)

    expect(seconds).toBe(3600)
  })
  it('should return zero seconds if the time passed is zero', () => {
    const mockedTime = "00:00:00"

    const seconds = parseTimeToSeconds(mockedTime)

    expect(seconds).toBe(0)
  })
})