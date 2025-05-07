"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    description: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom complet</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full p-2 outline-none rounded-sm border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full p-2 outline-none rounded-sm border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Téléphone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 block w-full p-2 outline-none rounded-sm border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Suivant
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black">Entreprise</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-2 block w-full p-2 rounded-sm outline-none border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Type de projet</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="mt-2 block w-full p-2 rounded-sm outline-none border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionnez un type</option>
                <option value="website">Site Web</option>
                <option value="application">Application</option>
                <option value="ai">Intelligence Artificielle</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Budget estimé</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="mt-1 block w-full p-2 rounded-sm outline-none border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionnez un budget</option>
                <option value="<5k">Moins de 5 000€</option>
                <option value="5k-15k">5 000€ - 15 000€</option>
                <option value="15k-30k">15 000€ - 30 000€</option>
                <option value=">30k">Plus de 30 000€</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/2 bg-white text-blue-600  py-2 px-4 rounded-md hover:bg-gray-100"
              >
                Précédent
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Suivant
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className='w-full'>
              <label className="block text-sm font-medium text-black">Description du projet</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="mt-2 block w-full p-2 outline-none rounded-sm border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/2 bg-white text-blue-600   py-2 px-4 rounded-md hover:bg-gray-100"
              >
                Précédent
              </button>
              <button
                type="submit"
                className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Envoyer
              </button>
            </div>
          </div>
        )}
      </form>

      <Dialog>
        <DialogTrigger asChild>
          <button className="mt-4 text-sm text-blue-600 hover:text-blue-800">
            Voir notre politique de confidentialité
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Politique de Confidentialité</DialogTitle>
            <DialogDescription>
              Nous nous engageons à protéger vos données personnelles. Les informations que vous nous fournissez sont utilisées uniquement dans le cadre de votre demande de devis et ne seront jamais partagées avec des tiers sans votre consentement explicite.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}