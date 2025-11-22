function doPost(e) {
  const ss = SpreadsheetApp.getActive();
  
  // Booking sheet
  const bookingSheet = ss.getSheetByName("Bookings");
  // Contact sheet
  const contactSheet = ss.getSheetByName("Contacts");
  
  // Determine form type
  const formType = e.parameter.formType || "";

  if (formType === "booking") {
    const name = e.parameter.name || "";
    const phone = e.parameter.phone || "";
    const rooms = e.parameter.rooms || "";
    const adults = e.parameter.adults || "";
    const children = e.parameter.children || "";
    const checkin = e.parameter.checkin || "";
    const checkout = e.parameter.checkout || "";
    
    bookingSheet.appendRow([new Date(), name, phone, rooms, adults, children, checkin, checkout]);
    return ContentService.createTextOutput("Booking saved successfully!");
  } 
  else if (formType === "contact") {
    const name = e.parameter.name || "";
    const phone = e.parameter.phone || "";
    const email = e.parameter.email || "";
    const message = e.parameter.message || "";
    
    contactSheet.appendRow([new Date(), name, phone, email, message]);
    return ContentService.createTextOutput("Contact saved successfully!");
  } 
  else {
    return ContentService.createTextOutput("Unknown form type");
  }
}
