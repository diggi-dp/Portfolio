'use client';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { GrContactInfo } from 'react-icons/gr';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    textarea: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setSuccess(false);
        return;
      } else if (data.msg) {
        setSuccess(true);
        setFormData({ firstname: '', lastname: '', email: '', textarea: '' });
      }
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('digpalsinghmandloi1@gmail.com');
    alert('Email address copied to clipboard!');
  };

  return (
    <div id="contact" className="mx-auto max-w-md px-4 py-12 md:max-w-3xl">
      <h2 className="mb-10 flex items-center justify-center text-3xl font-bold">
        Contact
        <span className="pl-3">
          <GrContactInfo size={30} color="#fbd38d" />
        </span>
      </h2>

      <div className="mx-auto w-full max-w-[600px] rounded-none bg-gradient-to-r from-slate-900 to-slate-700 bg-[length:200%_100%] p-4 shadow-input md:rounded-2xl md:p-8">
        <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-300">
          Want to discuss a potential project or opportunity? I&apos;d love to
          hear from you. <br /> Contact me directly at{' '}
          <span
            className="cursor-pointer bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-lg font-semibold text-transparent"
            onClick={handleCopy}
            title="click to copy"
          >
            digpalsinghmandloi1@gmail.com
          </span>{' '}
          or fill out the form below.
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Tyler"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Durden"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="tylerdurden@gmail.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="textarea">Description</Label>
            <Textarea
              id="textarea"
              name="textarea"
              placeholder="message..."
              rows={3}
              value={formData.textarea}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-zinc-700 to-zinc-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit'}
            <BottomGradient />
          </button>

          {success && (
            <p className="pt-2 text-center text-green-600">
              Message sent successfully!
            </p>
          )}
          {error && <p className="pt-2 text-center text-red-600">{error}</p>}

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </form>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  );
};

export default Contact;
