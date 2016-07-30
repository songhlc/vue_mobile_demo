import baseservice from '../baseservice'

function qutationlist (status, pageIndex = 0, pageSize = 10, success, error) {
  baseservice.get('qutate/loaddata?status=' + status + '&pageIndex=' + pageIndex, {}, success, error)
}
function qutationdetail (id, priceid, success, error) {
  baseservice.get('qutate/findQuotationById/' + id + '/' + priceid, {}, success, error)
}
function qutationofferdetail (id, success, error) {
  baseservice.get('mobileprice/findQuotationById/' + id, {}, success, error)
}
export default {
  qutationlist: qutationlist,
  qutationdetail: qutationdetail,
  qutationofferdetail: qutationofferdetail
}
