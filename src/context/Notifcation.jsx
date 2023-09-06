import { createContext, useState } from "react";
import Notification from "../components/modules/Notification";

const defaultState = {
  notification: (type, content) => {},
};
export const NotificationContext = createContext(defaultState);

export const NotifcationProvider = ({ children }) => {
  const [type, setType] = useState("success");
  const [content, setContent] = useState("");

  const notification = (type = "success", content) => {
    setType(type);
    setContent(content);
  };

  const remove = () => {
    setType("");
    setContent("");
  };

  return (
    <NotificationContext.Provider
      value={{ notification, type, content, remove }}
    >
      <Notification />
      {children}
    </NotificationContext.Provider>
  );
};
