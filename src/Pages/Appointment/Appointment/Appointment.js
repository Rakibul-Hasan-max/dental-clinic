import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHead from '../AppointmentHead/AppointmentHead';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHead></AppointmentHead>
            <AvailableAppointment></AvailableAppointment>
        </div>
    );
};

export default Appointment;