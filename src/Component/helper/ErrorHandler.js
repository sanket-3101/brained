import { NotificationManager } from 'react-notifications';

function ErrorHandler(error, success) {
    if (success) {
        NotificationManager.success(error.response.data.message);
    }
    NotificationManager.error(error.response.data.message);

}
export default ErrorHandler;
