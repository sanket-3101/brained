import { NotificationManager} from 'react-notifications';

function ErrorHandler(error) {
    NotificationManager.error(error.response.data.message);

}
export default ErrorHandler;
