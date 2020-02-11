// In a bigger application, I would have this in a constants file and import it.
const LOG_PART_INFO = "LOG_PART_INFO";

// standard action creator, returns object with type and a payload.
export const logPartInfo = payload => ({
  type: LOG_PART_INFO,
  payload
});
