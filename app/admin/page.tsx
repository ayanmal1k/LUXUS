'use client';

import { useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut,
  User
} from 'firebase/auth';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Mail, User as UserIcon, MessageSquare, BookOpen, Trash2, ShieldCheck, Briefcase, Phone, Building } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ADMIN_EMAIL = 'admin@luxus.com';

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contacts, setContacts] = useState<any[]>([]);
  const [catalogRequests, setCatalogRequests] = useState<any[]>([]);
  const [portfolioInquiries, setPortfolioInquiries] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === ADMIN_EMAIL) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    // Listen to contacts
    const qContacts = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
    const unsubContacts = onSnapshot(qContacts, (snapshot) => {
      setContacts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Listen to catalog requests
    const qCatalog = query(collection(db, 'catalog_requests'), orderBy('createdAt', 'desc'));
    const unsubCatalog = onSnapshot(qCatalog, (snapshot) => {
      setCatalogRequests(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Listen to portfolio inquiries
    const qPortfolio = query(collection(db, 'portfolio_inquiries'), orderBy('createdAt', 'desc'));
    const unsubPortfolio = onSnapshot(qPortfolio, (snapshot) => {
      setPortfolioInquiries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubContacts();
      unsubCatalog();
      unsubPortfolio();
    };
  }, [user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== ADMIN_EMAIL) {
      toast.error('Unauthorized access.');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Welcome back, Admin.');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleLogout = () => signOut(auth);

  const deleteEntry = async (col: string, id: string) => {
    if (!confirm('Are you sure you want to delete this entry?')) return;
    try {
      await deleteDoc(doc(db, col, id));
      toast.success('Entry deleted.');
    } catch (error) {
      toast.error('Failed to delete entry.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="bg-[#111111]/80 border-[#D4AF37]/20 backdrop-blur-xl">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4 border border-[#D4AF37]/20">
                <ShieldCheck className="text-[#D4AF37]" size={24} />
              </div>
              <CardTitle className="text-2xl font-serif text-white">Luxus Admin</CardTitle>
              <CardDescription className="text-[#BFB8A7]">Secure access for administration only</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    type="email" 
                    placeholder="Admin Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border-[#D4AF37]/20 focus:border-[#D4AF37] text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/5 border-[#D4AF37]/20 focus:border-[#D4AF37] text-white"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#E8C547] text-[#0B0B0B] font-bold">
                  LOGIN
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white p-6 md:p-12 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08)_0%,transparent_50%)]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#D4AF37]/10 pb-8">
          <div>
            <h1 className="text-4xl font-serif font-bold text-[#D4AF37]">Admin Dashboard</h1>
            <p className="text-[#BFB8A7] mt-1 italic">Managing LUXUS International inquiries</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-white/5 rounded-full border border-[#D4AF37]/20 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-medium text-[#BFB8A7]">{user.email}</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout} className="border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10">
              <LogOut size={16} className="mr-2" /> Logout
            </Button>
          </div>
        </header>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Contacts" count={contacts.length} icon={<MessageSquare className="text-[#D4AF37]" size={20} />} />
          <StatCard title="Catalog Requests" count={catalogRequests.length} icon={<BookOpen className="text-[#D4AF37]" size={20} />} />
          <StatCard title="Portfolio Inquiries" count={portfolioInquiries.length} icon={<Briefcase className="text-[#D4AF37]" size={20} />} />
          <StatCard title="Total Leads" count={contacts.length + catalogRequests.length + portfolioInquiries.length} icon={<ShieldCheck className="text-[#D4AF37]" size={20} />} />
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="contacts" className="w-full">
          <TabsList className="bg-white/5 border border-[#D4AF37]/20 p-1 mb-8">
            <TabsTrigger value="contacts" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0B0B0B] px-8">Contact Form</TabsTrigger>
            <TabsTrigger value="catalog" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0B0B0B] px-8">Catalog Requests</TabsTrigger>
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0B0B0B] px-8">Portfolio Inquiries</TabsTrigger>
          </TabsList>

          <TabsContent value="contacts">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {contacts.map((contact) => (
                  <motion.div
                    key={contact.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <EntryCard 
                      entry={contact} 
                      type="contact" 
                      onDelete={() => deleteEntry('contacts', contact.id)} 
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>

          <TabsContent value="catalog">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {catalogRequests.map((request) => (
                  <motion.div
                    key={request.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <EntryCard 
                      entry={request} 
                      type="catalog" 
                      onDelete={() => deleteEntry('catalog_requests', request.id)} 
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>

          <TabsContent value="portfolio">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {portfolioInquiries.map((inquiry) => (
                  <motion.div
                    key={inquiry.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <EntryCard 
                      entry={inquiry} 
                      type="portfolio" 
                      onDelete={() => deleteEntry('portfolio_inquiries', inquiry.id)} 
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function StatCard({ title, count, icon }: { title: string, count: number, icon: React.ReactNode }) {
  return (
    <Card className="bg-[#111111]/50 border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-colors">
      <CardContent className="p-6 flex items-center justify-between">
        <div>
          <p className="text-[#BFB8A7] text-sm uppercase tracking-widest">{title}</p>
          <h3 className="text-3xl font-serif font-bold text-white mt-1">{count}</h3>
        </div>
        <div className="p-3 bg-white/5 rounded-xl border border-[#D4AF37]/20">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}

function EntryCard({ entry, type, onDelete }: { entry: any, type: 'contact' | 'catalog' | 'portfolio', onDelete: () => void }) {
  const date = entry.createdAt?.toDate ? entry.createdAt.toDate().toLocaleString() : 'N/A';

  return (
    <Card className="bg-[#111111]/80 border-[#D4AF37]/20 overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-300">
      <CardHeader className="pb-4 relative">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <UserIcon size={14} className="text-[#D4AF37]" />
              <CardTitle className="text-lg text-white">{entry.name || entry.fullName}</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#D4AF37]" />
              <a href={`mailto:${entry.email}`} className="text-[#BFB8A7] text-sm hover:text-[#D4AF37] transition-colors">{entry.email}</a>
            </div>
            {entry.phone && (
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#D4AF37]" />
                <span className="text-[#BFB8A7] text-sm">{entry.phone}</span>
              </div>
            )}
            {entry.company && (
              <div className="flex items-center gap-2">
                <Building size={14} className="text-[#D4AF37]" />
                <span className="text-[#BFB8A7] text-sm">{entry.company}</span>
              </div>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onDelete}
            className="text-white/20 hover:text-red-500 hover:bg-red-500/10 transition-all"
          >
            <Trash2 size={18} />
          </Button>
        </div>
        <div className="absolute top-0 right-0 p-2">
           <span className="text-[10px] text-white/20 font-mono">{entry.id}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {(type === 'contact' || type === 'portfolio') && entry.message && (
          <div className="bg-white/5 p-4 rounded-lg border border-[#D4AF37]/10">
            <p className="text-[#F5F2EA] text-sm leading-relaxed whitespace-pre-wrap">
              {entry.message}
            </p>
          </div>
        )}
        {type === 'contact' && entry.issue && (
          <div className="bg-white/5 p-4 rounded-lg border border-[#D4AF37]/10">
            <p className="text-[#F5F2EA] text-sm leading-relaxed whitespace-pre-wrap">
              {entry.issue}
            </p>
          </div>
        )}
        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-white/30 pt-2 border-t border-white/5">
          <span className="flex items-center gap-1">
             {type === 'portfolio' && entry.projectType && <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded-full text-[8px] mr-2">{entry.projectType}</span>}
             {type === 'contact' ? 'Contact Inquiry' : type === 'catalog' ? 'Catalog Request' : 'Portfolio Inquiry'}
          </span>
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  );
}
