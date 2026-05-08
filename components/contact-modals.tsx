'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useI18n } from '@/components/i18n-provider';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  issue: z.string().min(5, { message: 'Please describe your inquiry.' }),
});

const catalogSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export function ContactModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { t } = useI18n();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', issue: '' },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    try {
      await addDoc(collection(db, 'contacts'), {
        ...values,
        createdAt: serverTimestamp(),
        type: 'contact',
      });
      toast.success('Message sent successfully!');
      onOpenChange(false);
      form.reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message. Please try again.');
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0B0B0B]/95 backdrop-blur-xl border-[#D4AF37]/30 text-white max-w-md shadow-[0_0_50px_rgba(212,175,55,0.15)]">
        <DialogHeader className="space-y-3">
          <DialogTitle className="font-serif text-3xl text-[#D4AF37] tracking-tight">Contact Us</DialogTitle>
          <DialogDescription className="text-[#BFB8A7] text-sm leading-relaxed">
            Get in touch with our team for any inquiries or project discussions. We typically respond within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 pt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-white/5 border-[#D4AF37]/20 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 placeholder:text-white/20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your@email.com" 
                      className="bg-white/5 border-[#D4AF37]/20 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 placeholder:text-white/20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="issue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">Inquiry / Issue</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="How can we help you?" 
                      className="bg-white/5 border-[#D4AF37]/20 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 min-h-[120px] placeholder:text-white/20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] text-[#0B0B0B] font-bold tracking-[0.2em] uppercase transition-all duration-300 py-6"
            >
              SEND MESSAGE
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export function CatalogModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { t } = useI18n();
  const form = useForm<z.infer<typeof catalogSchema>>({
    resolver: zodResolver(catalogSchema),
    defaultValues: { name: '', email: '' },
  });

  async function onSubmit(values: z.infer<typeof catalogSchema>) {
    try {
      await addDoc(collection(db, 'catalog_requests'), {
        ...values,
        createdAt: serverTimestamp(),
        type: 'catalog_request',
      });
      toast.success('Request submitted! We will send the catalog shortly.');
      onOpenChange(false);
      form.reset();
    } catch (error) {
      console.error('Error submitting catalog request:', error);
      toast.error('Failed to submit request. Please try again.');
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0B0B0B]/95 backdrop-blur-xl border-[#D4AF37]/30 text-white max-w-md shadow-[0_0_50px_rgba(212,175,55,0.15)]">
        <DialogHeader className="space-y-3">
          <DialogTitle className="font-serif text-3xl text-[#D4AF37] tracking-tight">Materials Catalog</DialogTitle>
          <DialogDescription className="text-[#BFB8A7] text-sm leading-relaxed">
            Request our complete catalog of premium Italian materials and finishes, delivered directly to your inbox.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 pt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-white/5 border-[#D4AF37]/20 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 placeholder:text-white/20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your@email.com" 
                      className="bg-white/5 border-[#D4AF37]/20 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 placeholder:text-white/20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] text-[#0B0B0B] font-bold tracking-[0.2em] uppercase transition-all duration-300 py-6"
            >
              REQUEST CATALOG
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
