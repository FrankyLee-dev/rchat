import { useEffect, useRef } from "react";

export default function useWebsocket(onMessage) {
    const ws = useRef(null);

    useEffect(() => {
        if (ws.current !== null) return;
        const wsUri = 'ws://1.14.155.26:8888/ws';
        ws.current = new WebSocket(wsUri);
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");

        const wsCurrent = ws.current;
        return () => {
            wsCurrent.close();
        };
    }, []);

    useEffect(() => {
        if (!ws.current) return;
        ws.current.onmessage = e => {
            onMessage(e.data)
        };
    }, []);

    const sendMessage = (msg) => {
        if (!ws.current) return;
        ws.current.send(msg);
    }

    return sendMessage;
}