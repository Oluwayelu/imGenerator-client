import { useContext } from "react";
import { NotificationContext } from "../context/Notifcation";

export const useNotification = () => useContext(NotificationContext);
