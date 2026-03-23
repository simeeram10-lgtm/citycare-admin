'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { generatePassword } from '@/lib/generatePassword'
import toast from 'react-hot-toast'

export default function EditOfficerDialog({ isOpen, officer, onClose, onUpdate }) {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (officer) {
      setFormData(officer)
    }
  }, [officer])

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName?.trim()) newErrors.fullName = 'Required'
    if (!formData.email?.trim()) newErrors.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.phone?.trim()) newErrors.phone = 'Required'
    else if (formData.phone.replace(/\D/g, '').length !== 10) newErrors.phone = '10 digits only'
    if (!formData.dob?.trim()) newErrors.dob = 'Required'
    if (!formData.state?.trim()) newErrors.state = 'Required'
    if (!formData.city?.trim()) newErrors.city = 'Required'
    if (!formData.region?.trim()) newErrors.region = 'Required'
    if (!formData.department?.trim()) newErrors.department = 'Required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) {
      toast.error('Please fill all required fields')
      return
    }
    onUpdate(formData)
    onClose()
  }

  if (!isOpen || !officer) return null

  return (
    <div className="fixed inset-0 bg-black/40 dark:bg-black/70 z-50 flex items-center justify-center p-4 transition-all duration-500">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-teal-200/50 dark:border-cyan-700/50 transition-all duration-500">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-900 dark:text-white">Edit Officer</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-teal-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
          >
            <X className="w-6 h-6 text-teal-600 dark:text-cyan-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-teal-900 dark:text-white mb-2">Full Name</label>
              <input
                type="text"
                value={formData.fullName || ''}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-teal-200 dark:border-cyan-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-cyan-500 focus:border-teal-500 dark:focus:border-cyan-500 transition-all duration-300 text-xs sm:text-sm"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-teal-900 dark:text-white mb-2">Email</label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-teal-200 dark:border-cyan-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-cyan-500 focus:border-teal-500 dark:focus:border-cyan-500 transition-all duration-300 text-xs sm:text-sm"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-teal-900 dark:text-white mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-teal-200 dark:border-cyan-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-cyan-500 focus:border-teal-500 dark:focus:border-cyan-500 transition-all duration-300 text-xs sm:text-sm"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-teal-900 dark:text-white mb-2">DOB</label>
              <input
                type="date"
                value={formData.dob || ''}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-teal-200 dark:border-cyan-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-cyan-500 focus:border-teal-500 dark:focus:border-cyan-500 transition-all duration-300 text-xs sm:text-sm"
              />
              {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-teal-900 dark:text-white mb-2">State</label>
              <input
                type="text"
                value={formData.state || ''}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-teal-200 dark:border-cyan-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-cyan-500 focus:border-teal-500 dark:focus:border-cyan-500 transition-all duration-300 text-xs sm:text-sm"
              />
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-teal-900 dark:text-white mb-2">City</label>
              <input
                type="text"
                value={formData.city || ''}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-teal-200 dark:border-cyan-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-cyan-500 focus:border-teal-500 dark:focus:border-cyan-500 transition-all duration-300 text-xs sm:text-sm"
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-teal-900 dark:text-white mb-2">Region / District</label>
              <input
                type="text"
                value={formData.region || ''}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-teal-200 dark:border-cyan-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-cyan-500 focus:border-teal-500 dark:focus:border-cyan-500 transition-all duration-300 text-xs sm:text-sm"
              />
              {errors.region && <p className="text-red-500 text-xs mt-1">{errors.region}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-teal-900 dark:text-white mb-2">Department</label>
              <input
                type="text"
                value={formData.department || ''}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-teal-200 dark:border-cyan-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-cyan-500 focus:border-teal-500 dark:focus:border-cyan-500 transition-all duration-300 text-xs sm:text-sm"
              />
              {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-teal-900 dark:text-white mb-2">Role</label>
              <select
                value={formData.role || 'unit_officer'}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-teal-200 dark:border-cyan-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-cyan-500 focus:border-teal-500 dark:focus:border-cyan-500 transition-all duration-300 text-xs sm:text-sm"
              >
                <option value="unit_officer">Unit Officer</option>
                <option value="field_officer">Field Officer</option>
              </select>
            </div>

            {formData.role === 'field_officer' && (
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-teal-900 dark:text-white mb-2">Specialisation</label>
                <input
                  type="text"
                  value={formData.specialisation || ''}
                  onChange={(e) => setFormData({ ...formData, specialisation: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-teal-200 dark:border-cyan-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-cyan-500 focus:border-teal-500 dark:focus:border-cyan-500 transition-all duration-300 text-xs sm:text-sm"
                />
              </div>
            )}
          </div>

          <div className="flex gap-3 mt-6 sm:mt-8 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-teal-200 dark:border-cyan-700 text-teal-700 dark:text-cyan-300 bg-transparent dark:bg-transparent rounded-lg hover:bg-teal-50 dark:hover:bg-slate-800/80 transition-all duration-300 text-xs sm:text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-cyan-600 dark:to-teal-500 text-white dark:text-slate-950 rounded-lg hover:from-teal-700 hover:to-cyan-700 dark:hover:from-cyan-700 dark:hover:to-teal-600 transition-all duration-300 text-xs sm:text-sm font-medium shadow-md hover:shadow-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
