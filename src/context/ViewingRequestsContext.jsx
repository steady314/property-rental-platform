import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useAuth } from "./AuthContext";

const ViewingRequestsContext = createContext();

function ViewingRequestsProvider({ children }) {
  const { user } = useAuth();

  const [requests, setRequests] = useState(() => {
    const savedRequests = localStorage.getItem(
      "propertyRentalViewingRequests"
    );

    return savedRequests
      ? JSON.parse(savedRequests)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "propertyRentalViewingRequests",
      JSON.stringify(requests)
    );
  }, [requests]);

  const addRequest = (request) => {
    if (!user) {
      return;
    }

    const newRequest = {
      id: Date.now(),

      userId: user.id,
      userName: user.name,
      userEmail: user.email,

      ...request,

      status: "Pending",
    };

    setRequests((currentRequests) => [
      ...currentRequests,
      newRequest,
    ]);
  };

  const updateRequestStatus = (
    requestId,
    newStatus
  ) => {
    setRequests((currentRequests) =>
      currentRequests.map((request) =>
        request.id === requestId
          ? {
              ...request,
              status: newStatus,
            }
          : request
      )
    );
  };

  const userRequests = user
    ? requests.filter(
        (request) =>
          request.userId === user.id
      )
    : [];

  return (
    <ViewingRequestsContext.Provider
      value={{
        requests,
        userRequests,
        addRequest,
        updateRequestStatus,
      }}
    >
      {children}
    </ViewingRequestsContext.Provider>
  );
}

function useViewingRequests() {
  return useContext(
    ViewingRequestsContext
  );
}

export {
  ViewingRequestsProvider,
  useViewingRequests,
};