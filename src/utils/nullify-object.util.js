export function nullifyObject(object) {
  // eslint-disable-next-line
  for (const prop in object) {
    // eslint-disable-next-line
    if (object.hasOwnProperty(prop)) {
      let value = object[prop];

      switch (value) {
        case typeof value === 'string' || value instanceof String: {
          value = '';
          break;
        }

        case typeof value === 'number': {
          value = 0;
          break;
        }

        case Array.isArray(value): {
          value = [];
          break;
        }

        case typeof value === 'string' || value instanceof String: {
          break;
        }

        default:
          break;
      }
    }
  }
}
