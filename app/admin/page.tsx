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
import { LogOut, Mail, User as UserIcon, MessageSquare, BookOpen, Trash2, ShieldCheck, Briefcase, Phone, Building, ArrowLeft, LayoutDashboard } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useI18n } from '@/components/i18n-provider';
import Link from 'next/link';

export default function AdminPage() {
  const { t } = useI18n();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contacts, setContacts] = useState<any[]>([]);
  const [catalogRequests, setCatalogRequests] = useState<any[]>([]);
  const [portfolioInquiries, setPortfolioInquiries] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === 'admin@luxus.com') {
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
    if (email !== 'admin@luxus.com') {
      toast.error(t('admin.auth.unauthorized'));
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(t('admin.auth.welcome'));
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleLogout = () => signOut(auth);

  const deleteEntry = async (col: string, id: string) => {
    if (!confirm(t('admin.card.deleteConfirm'))) return;
    try {
      await deleteDoc(doc(db, col, id));
      toast.success(t('admin.card.deleted'));
    } catch (error) {
      toast.error(t('admin.card.deleteError'));
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
          <div className="mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-[#BFB8A7] hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest font-medium">
               <ArrowLeft size={16} /> {t('navbar.home')}
            </Link>
          </div>
          <Card className="bg-[#111111]/80 border-[#D4AF37]/20 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4 border border-[#D4AF37]/20">
                <ShieldCheck className="text-[#D4AF37]" size={24} />
              </div>
              <CardTitle className="text-2xl font-serif text-white">{t('admin.loginTitle')}</CardTitle>
              <CardDescription className="text-[#BFB8A7]">{t('admin.loginSubtitle')}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    type="email" 
                    placeholder={t('admin.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border-[#D4AF37]/20 focus:border-[#D4AF37] text-white h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    type="password" 
                    placeholder={t('admin.passwordPlaceholder')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/5 border-[#D4AF37]/20 focus:border-[#D4AF37] text-white h-12"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#E8C547] text-[#0B0B0B] font-bold h-12 transition-all duration-300">
                  {t('admin.loginButton')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08)_0%,transparent_50%)]">
      
      {/* Sidebar-style Layout */}
      <div className="flex min-h-screen">
        
        {/* Simple Sidebar */}
        <aside className="w-20 lg:w-64 border-r border-[#D4AF37]/10 flex flex-col bg-[#0D0D0D]">
          <div className="p-6 border-b border-[#D4AF37]/10 flex justify-center lg:justify-start">
             <LayoutDashboard className="text-[#D4AF37]" size={28} />
             <span className="hidden lg:block ml-3 font-serif font-bold text-xl tracking-wider text-[#D4AF37]">LUXUS</span>
          </div>
          <nav className="flex-1 p-4 space-y-4">
             <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-[#BFB8A7] hover:text-white transition-all">
                <ArrowLeft size={20} />
                <span className="hidden lg:block text-sm font-medium">{t('navbar.home')}</span>
             </Link>
          </nav>
          <div className="p-4 border-t border-[#D4AF37]/10">
            <Button variant="ghost" className="w-full flex items-center justify-center lg:justify-start gap-3 p-3 rounded-lg text-red-500/70 hover:text-red-500 hover:bg-red-500/10" onClick={handleLogout}>
              <LogOut size={20} />
              <span className="hidden lg:block text-sm font-medium">{t('admin.logoutButton')}</span>
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-4xl font-serif font-bold text-white tracking-tight">{t('admin.title')}</h1>
                <p className="text-[#BFB8A7] mt-1 italic">{t('admin.subtitle')}</p>
              </div>
              <div className="px-4 py-2 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">{user.email}</span>
              </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title={t('admin.stats.contacts')} count={contacts.length} icon={<MessageSquare className="text-[#D4AF37]" size={20} />} />
              <StatCard title={t('admin.stats.catalog')} count={catalogRequests.length} icon={<BookOpen className="text-[#D4AF37]" size={20} />} />
              <StatCard title={t('admin.stats.portfolio')} count={portfolioInquiries.length} icon={<Briefcase className="text-[#D4AF37]" size={20} />} />
              <StatCard title={t('admin.stats.total')} count={contacts.length + catalogRequests.length + portfolioInquiries.length} icon={<ShieldCheck className="text-[#D4AF37]" size={20} />} />
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="contacts" className="w-full">
              <TabsList className="bg-[#111111] border border-[#D4AF37]/20 p-1 mb-8 w-fit">
                <TabsTrigger value="contacts" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0B0B0B] px-8 py-2.5 transition-all duration-300 font-bold uppercase text-[10px] tracking-widest">
                  {t('admin.tabs.contacts')}
                </TabsTrigger>
                <TabsTrigger value="catalog" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0B0B0B] px-8 py-2.5 transition-all duration-300 font-bold uppercase text-[10px] tracking-widest">
                  {t('admin.tabs.catalog')}
                </TabsTrigger>
                <TabsTrigger value="portfolio" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0B0B0B] px-8 py-2.5 transition-all duration-300 font-bold uppercase text-[10px] tracking-widest">
                  {t('admin.tabs.portfolio')}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="contacts">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <AnimatePresence mode="popLayout">
                    {contacts.map((contact) => (
                      <motion.div
                        key={contact.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <AnimatePresence mode="popLayout">
                    {catalogRequests.map((request) => (
                      <motion.div
                        key={request.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <AnimatePresence mode="popLayout">
                    {portfolioInquiries.map((inquiry) => (
                      <motion.div
                        key={inquiry.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
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
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, count, icon }: { title: string, count: number, icon: React.ReactNode }) {
  return (
    <Card className="bg-[#111111] border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500 group">
      <CardContent className="p-8 flex items-center justify-between">
        <div>
          <p className="text-[#BFB8A7] text-[10px] uppercase tracking-[0.2em] font-bold">{title}</p>
          <h3 className="text-4xl font-serif font-bold text-white mt-2 group-hover:text-[#D4AF37] transition-colors">{count}</h3>
        </div>
        <div className="p-4 bg-[#D4AF37]/5 rounded-2xl border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/10 transition-all duration-500">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}

function EntryCard({ entry, type, onDelete }: { entry: any, type: 'contact' | 'catalog' | 'portfolio', onDelete: () => void }) {
  const { t } = useI18n();
  const date = entry.createdAt?.toDate ? entry.createdAt.toDate().toLocaleString() : 'N/A';

  return (
    <Card className="bg-[#111111] border-[#D4AF37]/10 overflow-hidden group hover:border-[#D4AF37]/40 transition-all duration-500 shadow-2xl">
      <CardHeader className="pb-6 relative">
        <div className="flex justify-between items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
                 <UserIcon size={18} className="text-[#D4AF37]" />
              </div>
              <CardTitle className="text-xl text-white font-serif">{entry.name || entry.fullName}</CardTitle>
            </div>
            <div className="space-y-2 ml-1">
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#D4AF37]/60" />
                <a href={`mailto:${entry.email}`} className="text-[#BFB8A7] text-sm hover:text-[#D4AF37] transition-colors">{entry.email}</a>
              </div>
              {entry.phone && (
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-[#D4AF37]/60" />
                  <span className="text-[#BFB8A7] text-sm">{entry.phone}</span>
                </div>
              )}
              {entry.company && (
                <div className="flex items-center gap-3">
                  <Building size={14} className="text-[#D4AF37]/60" />
                  <span className="text-[#BFB8A7] text-sm uppercase tracking-widest text-[10px] font-bold">{entry.company}</span>
                </div>
              )}
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onDelete}
            className="text-white/20 group-hover:text-red-400/70 hover:!text-red-500 hover:bg-red-500/10 transition-all h-10 w-10 shrink-0"
          >
            <Trash2 size={18} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-0">
        {(type === 'contact' || type === 'portfolio') && (entry.message || entry.issue) && (
          <div className="bg-[#0D0D0D] p-5 rounded-xl border border-[#D4AF37]/10 relative group-hover:border-[#D4AF37]/30 transition-all duration-500">
             <div className="absolute -top-2.5 left-4 px-2 bg-[#111111] text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">
               {t('admin.card.inquiry')}
             </div>
            <p className="text-[#F5F2EA] text-sm leading-relaxed whitespace-pre-wrap italic opacity-90">
              "{entry.message || entry.issue}"
            </p>
          </div>
        )}
        <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/20 pt-4 border-t border-white/5 font-bold">
          <div className="flex items-center gap-2">
             {type === 'portfolio' && entry.projectType && <span className="bg-[#D4AF37] text-[#0B0B0B] px-3 py-1 rounded-full text-[8px]">{entry.projectType}</span>}
             <span className="text-[#D4AF37]/60">
               {type === 'contact' ? t('admin.card.inquiry') : type === 'catalog' ? t('admin.card.request') : t('admin.card.portfolio')}
             </span>
          </div>
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  );
}
