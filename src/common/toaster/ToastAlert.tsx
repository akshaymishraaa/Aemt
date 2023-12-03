
import React, { useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useSelector } from 'react-redux';

export default function ToastAlert() {
    const toast = useRef<any>(null);
    const { modal } = useSelector((state: any) => state.application)
    useEffect(() => {
        if (modal?.show) {
            enableAlert()
        }

    }, [modal])

    const enableAlert = () => {
        toast.current.show({
            severity: modal.severity, summary: modal.summary, detail: modal.detail, life: 3000 });
    }
    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
        </div>
    )
}
