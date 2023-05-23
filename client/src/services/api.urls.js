export const API_URLS = {
  saveSentEmail: {
    method: "POST",
    endpoint: "save",
  },
  getEmailFromType: {
    method: "GET",
    endpoint: "emails",
  },
  saveDraftEmails: {
    method: "POST",
    endpoint: "save-draft",
  },
  moveEmailsToBin: {
    method: "POST",
    endpoint: "bin",
  },
  toggleStarredEmail: {
    method: "POST",
    endpointL: "starred",
  },
  deleteEmails: {
    method: "DELETE",
    endpoint: "delete",
  },
};
