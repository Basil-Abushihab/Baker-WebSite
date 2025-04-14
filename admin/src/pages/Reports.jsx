import { useState } from "react";
const Reports = () => {
    const [reports, setReports] = useState([
      { id: '1', reportMaker: 'User123', reportDetails: 'Inappropriate content in recipe comments', isResolved: false, actionDetails: '' },
      { id: '2', reportMaker: 'User456', reportDetails: 'Spam in marketplace listings', isResolved: true, actionDetails: 'Removed spam listings and warned user' },
      { id: '3', reportMaker: 'User789', reportDetails: 'Abusive behavior in forum', isResolved: false, actionDetails: '' },
    ]);

    const handleResolve = (id) => {
      setReports(reports.map(report => 
        report.id === id 
          ? { ...report, isResolved: true, actionDetails: prompt('Enter action details:') || 'Marked as resolved' } 
          : report
      ));
    };

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Report Management</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-4">User Reports</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Maker</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{report.reportMaker}</td>
                  <td className="px-6 py-4">{report.reportDetails}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${report.isResolved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {report.isResolved ? 'Resolved' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4">{report.actionDetails}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {!report.isResolved && (
                      <button 
                        onClick={() => handleResolve(report.id)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Resolve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  export default Reports;