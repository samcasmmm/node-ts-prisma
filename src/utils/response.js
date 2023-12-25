/**
 * Sends a response based on the specified type with optional metadata, data, status, message, and additional options.
 * @param {object} res - The response object from Express.
 * @param {string} type - The type of response ('success', 'error', etc.).
 * @param {object} [meta={}] - Additional metadata for the response.
 * @param {object} [data=null] - The data to send in the response.
 * @param {number} [status=200] - The HTTP status code for the response (default: 200).
 * @param {string} [message=''] - A message associated with the response (default: '').
 * @param {object} [options={}] - Additional options for the response.
 */

const sendResponse = (res, type, meta, data = null, status = 200, message = '', options = {}) => {
   const response = {
      meta,
      data,
      message,
      ...options,
   };
   switch (type) {
      case 'success':
         res.status(status).json({
            success: true,
            ...response,
         });
         break;
      case 'error':
         res.status(status).json({
            success: false,
            ...response,
         });
         break;
      default:
         res.status(status).json({
            ...response,
         });
   }
};

export default sendResponse