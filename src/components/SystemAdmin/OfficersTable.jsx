'use client'

import { useState } from 'react'
import { Edit3, Trash2 } from 'lucide-react'
import EditOfficerDialog from './EditOfficerDialog'
import toast from 'react-hot-toast'

export default function OfficersTable({ officers, onOfficersUpdate }) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingOfficer, setEditingOfficer] = useState(null)

  const handleEdit = (officer, index) => {
    setEditingOfficer({ ...officer, index })
    setIsEditDialogOpen(true)
  }

  const handleUpdate = (updatedOfficer) => {
    const newOfficers = [...officers]
    const index = updatedOfficer.index
    delete updatedOfficer.index
    newOfficers[index] = updatedOfficer
    onOfficersUpdate(newOfficers)
    toast.success('Officer updated!')
  }

  const handleDelete = (index) => {
    if (confirm('Delete this officer?')) {
      const newOfficers = officers.filter((_, i) => i !== index)
      onOfficersUpdate(newOfficers)
      toast.success('Officer deleted!')
    }
  }

  if (officers.length === 0) {
    return (
      <div className="h-64 sm:h-80 grid place-items-center rounded-2xl sm:rounded-3xl border-2 border-dashed border-teal-300 dark:border-cyan-700 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 dark:from-slate-800/80 dark:to-slate-900/80">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-teal-900 dark:text-white mb-1 sm:mb-2">No Officers</h3>
          <p className="text-sm sm:text-base text-teal-700 dark:text-cyan-300">Upload CSV or add manually</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-teal-200/60 dark:border-cyan-700/60 shadow-xl transition-all duration-500 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-600 dark:from-cyan-700 dark:via-teal-700 dark:to-cyan-700\">
                <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-bold text-white dark:text-cyan-200">Name</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-bold text-white dark:text-cyan-200">Email</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-bold text-white dark:text-cyan-200 hidden md:table-cell">Phone</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-bold text-white dark:text-cyan-200 hidden lg:table-cell">DOB</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-bold text-white dark:text-cyan-200">State</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-bold text-white dark:text-cyan-200 hidden md:table-cell">City</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-bold text-white dark:text-cyan-200 hidden lg:table-cell">Region</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-bold text-white dark:text-cyan-200 hidden sm:table-cell">Dept</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-bold text-white dark:text-cyan-200 hidden lg:table-cell">Specialisation</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-bold text-white dark:text-cyan-200">Role</th>
                <th className="px-3 sm:px-4 py-3 text-center text-xs sm:text-sm font-bold text-white dark:text-cyan-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {officers.map((officer, index) => (
                <tr
                  key={index}
                  className="border-b border-teal-100 dark:border-cyan-700/50 hover:bg-teal-50/80 dark:hover:bg-cyan-900/40 transition-all duration-300 group"
                >
                  <td className="px-3 sm:px-4 py-3 font-semibold text-teal-900 dark:text-white max-w-[120px] sm:max-w-[160px] truncate text-xs sm:text-sm">
                    {officer.fullName}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-teal-700 dark:text-cyan-400 max-w-[140px] sm:max-w-[180px] truncate text-xs sm:text-sm">
                    {officer.email}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-teal-700 dark:text-cyan-400 whitespace-nowrap hidden md:table-cell text-xs sm:text-sm">
                    {officer.phone}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-teal-700 dark:text-cyan-400 whitespace-nowrap hidden lg:table-cell text-xs sm:text-sm">
                    {officer.dob}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-teal-700 dark:text-cyan-400 max-w-[80px] truncate text-xs sm:text-sm">
                    {officer.state}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-teal-700 dark:text-cyan-400 max-w-[80px] truncate hidden md:table-cell text-xs sm:text-sm">
                    {officer.city}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-teal-700 dark:text-cyan-400 max-w-[80px] truncate hidden lg:table-cell text-xs sm:text-sm">
                    {officer.region}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-teal-700 dark:text-cyan-400 max-w-[80px] truncate hidden sm:table-cell text-xs sm:text-sm">
                    {officer.department}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-teal-700 dark:text-cyan-400 max-w-[100px] truncate hidden lg:table-cell text-xs sm:text-sm">
                    {officer.specialisation}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      officer.role === 'unit_officer'
                        ? 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300'
                        : 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300'
                    }`}>
                      {officer.role === 'unit_officer' ? 'UNIT' : 'FIELD'}
                    </span>
                  </td>
                  <td className="px-3 sm:px-4 py-3 sticky right-0 bg-white dark:bg-slate-900/95">
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                      <button
                        onClick={() => handleEdit(officer, index)}
                        className="p-2 text-teal-600 hover:text-teal-800 dark:text-cyan-400 dark:hover:text-cyan-200 hover:bg-teal-100 dark:hover:bg-teal-900/30 rounded-lg transition-all"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="p-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <EditOfficerDialog
        isOpen={isEditDialogOpen}
        officer={editingOfficer}
        onClose={() => setIsEditDialogOpen(false)}
        onUpdate={handleUpdate}
      />
    </>
  )
}
