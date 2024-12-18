import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import Navdash from './Navdash';
import CustomToolbar from './Toolbar';
import { PiWarningDiamondLight } from "react-icons/pi";

const localizer = momentLocalizer(moment);

const Myschedule = () => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: null, end: null });
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const colors = [
    '#D1C4E9', '#AB47BC', '#6A1B9A', // Purple
    '#F8BBD0', '#EC407A', '#C2185B', // Pink
    '#FFF9C4', '#FDD835', '#F57F17', // Yellow
    '#FFE0B2', '#FF9800', '#F57C00', // Orange
    '#C8E6C9', '#66BB6A', '#2C6B55', // Green
    '#BBDEFB', '#42A5F5', '#0D47A1', // Blue
    '#FFCDD2', '#EF5350', '#C62828' // Red
  ];

  // Function to handle event creation
  const handleSelectSlot = (slotInfo) => {
    setNewEvent({ ...newEvent, start: slotInfo.start, end: slotInfo.end });
    setModalOpen(true); // Open the modal when a day is clicked
  };

  // Handle form submission
  const handleEventSubmit = (e) => {
    e.preventDefault();
    if (newEvent.title.trim()) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      setEvents([...events, { ...newEvent, color }]);
      setModalOpen(false); // Close the modal after submission
      setNewEvent({ title: '', start: null, end: null });
    }
  };

  // Open the delete confirmation modal
  const handleDoubleClickEvent = (event) => {
    setSelectedEvent(event); 
    setDeleteModalOpen(true);
  };

  // Confirm deletion of event
  const confirmDeleteEvent = () => {
    setEvents(events.filter((e) => e !== selectedEvent)); 
    setDeleteModalOpen(false); 
    setSelectedEvent(null); 
  };

  const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: event.color,
        color: 'white',
        borderRadius: '5px',
        border: 'none',
      },
    };
  };

  return (
    <div className="schedule-container">
      <Navdash title='My Schedule' />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        style={{ height: 600, width: '100%' }}
        onSelectSlot={handleSelectSlot}
        onDoubleClickEvent={handleDoubleClickEvent} // Double-tap event handler
        eventPropGetter={eventStyleGetter}
        tooltipAccessor={null}
        views={['month', 'week', 'day']}
        popup
        components={{
          event: ({ event }) => (
            <div className="custom-event" style={{ backgroundColor: event.color, color: 'white' }}>
              {event.title}
              <div className="event-popup" style={{ backgroundColor: event.color }}>
                {event.title}
              </div>
            </div>
          ),
          toolbar: CustomToolbar // Use the custom toolbar
        }}
      />

      {/* Event creation modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Create Event"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h3>Create New Event</h3>
        <form onSubmit={handleEventSubmit}>
          <label>
            Event Title:
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              required
            />
          </label>
          <button type="submit">Add Event</button>
        </form>
      </Modal>

      {/* Delete confirmation modal */}
      <Modal
        isOpen={deleteModalOpen}
        onRequestClose={() => setDeleteModalOpen(false)}
        contentLabel="Delete Event"
        className="modal delete"
        overlayClassName="modal-overlay"
      >
        <div className="icons"><PiWarningDiamondLight /></div>
        <h3>Are you sure you want to delete this event?</h3>
        <p>{selectedEvent?.title}</p>
        <div className="button">
        <button onClick={confirmDeleteEvent}>Confirm Delete</button>
        <button onClick={() => setDeleteModalOpen(false)}>Cancel</button>
        </div>

      </Modal>
    </div>
  );
};

export default Myschedule;
