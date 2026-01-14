import {isRouteErrorResponse, useRouteError} from "react-router";

export default function ErrorBoundary(){
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <>
                <p>Error: {error.status}: {error.statusText}</p>
                <p>{error.data}</p>
            </>
        );
    }

    return (
        <p>Error: {error instanceof Error ? error.message : "Unknown Error"}</p>
    );
}