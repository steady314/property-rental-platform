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

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!user) {
      setRequests([]);
      return;
    }

    const savedRequests = localStorage.getItem(
      `propertyRentalViewingRequests_${user.email}`
    );

    setRequests(
      savedRequests
        ? JSON.parse(savedRequests)
        : []
    );
  }, [user]);

  useEffect(() => {
    if (!user) {
      return;
    }

    localStorage.setItem(
      `propertyRentalViewingRequests_${user.email}`,
      JSON.stringify(requests)
    );
  }, [requests, user]);

  const addRequest = (request) => {
    if (!user) {
      return;
    }

    const newRequest = {
      id: Date.now(),
      ...request,
      userEmail: user.email,
      status: "Pending",
    };

    setRequests((currentRequests) => [
      ...currentRequests,
      newRequest,
    ]);
  };

  return (
    <ViewingRequestsContext.Provider
      value={{
        requests,
        addRequest,
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