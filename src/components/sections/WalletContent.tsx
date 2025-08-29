import { useState } from 'react';
import {
    Wallet,
    CreditCard,
    Plus,
    DollarSign,
    Euro,
    PoundSterling,
    Banknote,
    ArrowUpRight,
    ArrowDownLeft,
    Eye,
    EyeOff,
    Settings,
    History,
    Shield,
    Zap
} from 'lucide-react';

export function WalletContent() {
    const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>(['AED']);
    const [showBalances, setShowBalances] = useState(true);

    const currencies = [
        { code: 'USD', name: 'US Dollar', flag: '🇺🇸', balance: 2500.00, enabled: false },
        { code: 'EUR', name: 'Euro', flag: '🇪🇺', balance: 1800.50, enabled: true },
        { code: 'GBP', name: 'British Pound', flag: '🇬🇧', balance: 950.25, enabled: false },
        { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', balance: 8750.00, enabled: true },
        { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', balance: 125000, enabled: false },
        { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', balance: 1200.75, enabled: false }
    ];

    const recentTransactions = [
        {
            id: 1,
            type: 'payment',
            description: 'Nobu Dubai - Chef\'s Table',
            amount: -1200.00,
            currency: 'AED',
            date: '2025-01-15',
            status: 'completed',
            category: 'dining'
        },
        {
            id: 2,
            type: 'deposit',
            description: 'Wallet Top-up',
            amount: 5000.00,
            currency: 'AED',
            date: '2025-01-14',
            status: 'completed',
            category: 'transfer'
        },
        {
            id: 3,
            type: 'payment',
            description: 'Desert Safari Experience',
            amount: -2400.00,
            currency: 'AED',
            date: '2025-01-12',
            status: 'completed',
            category: 'adventure'
        }
    ];

    const toggleCurrency = (currencyCode: string) => {
        setSelectedCurrencies(prev =>
            prev.includes(currencyCode)
                ? prev.filter(c => c !== currencyCode)
                : [...prev, currencyCode]
        );
    };

    const formatBalance = (amount: number, currency: string) => {
        if (!showBalances) return '••••••';

        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: currency === 'JPY' ? 0 : 2
        }).format(amount);
    };

    const getCurrencyIcon = (currency: string) => {
        switch (currency) {
            case 'USD': return <DollarSign size={16} />;
            case 'EUR': return <Euro size={16} />;
            case 'GBP': return <PoundSterling size={16} />;
            default: return <Banknote size={16} />;
        }
    };

    return (
        <div className="h-full flex flex-col bg-[#222635] overflow-hidden">
            {/* Header */}
            <div className="px-4 sm:px-6 lg:pl-16 lg:pr-8 py-4 sm:py-6 bg-[#222635]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-[#E3DCD4] tracking-tight leading-tight mb-2"
                            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
                            Miftah Wallet
                        </h1>
                        <p className="text-sm sm:text-base text-[#E3DCD4]/70 leading-relaxed font-light"
                            style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                            Manage your funds and payments for exclusive experiences
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <button
                            onClick={() => setShowBalances(!showBalances)}
                            className="p-2 sm:p-3 bg-[#E3DCD4]/10 border border-[#957D65]/30 text-[#E3DCD4] rounded-xl hover:scale-102 transition-all duration-400 hover:bg-[#E3DCD4]/20"
                        >
                            {showBalances ? <Eye size={16} className="sm:w-5 sm:h-5" /> : <EyeOff size={16} className="sm:w-5 sm:h-5" />}
                        </button>
                        <button className="p-2 sm:p-3 bg-[#E3DCD4]/10 border border-[#957D65]/30 text-[#E3DCD4] rounded-xl hover:scale-102 transition-all duration-400 hover:bg-[#E3DCD4]/20">
                            <Settings size={16} className="sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>

                {/* Border separator contained within padding */}
                <div className="border-b border-[#957D65]/20 mt-6"></div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:pl-16 lg:pr-8 py-4 sm:py-6">
                {/* Total Balance Card */}
                <div className="mb-8 p-6 glassmorphic glassmorphic-animated rounded-2xl border border-[#957D65]/20 bg-gradient-to-br from-[#957D65]/10 to-[#957D65]/5">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-[#957D65]/20 rounded-xl flex items-center justify-center">
                                <Wallet size={24} className="text-[#957D65]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-[#E3DCD4]" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                                    Total Balance
                                </h3>
                                <p className="text-sm text-[#E3DCD4]/60">Across all currencies</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Shield size={16} className="text-[#957D65]" />
                            <span className="text-xs text-[#E3DCD4]/60 uppercase tracking-wider">Secured</span>
                        </div>
                    </div>

                    <div className="text-3xl font-bold text-[#E3DCD4] mb-4" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                        {showBalances ? 'AED 13,200.50' : '••••••••'}
                    </div>

                    <div className="flex space-x-3">
                        <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-[#957D65] text-[#E3DCD4] rounded-xl hover:scale-102 transition-all duration-400 shadow-lg shadow-[#957D65]/30">
                            <Plus size={18} />
                            <span className="font-medium">Add Funds</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#E3DCD4]/10 text-[#E3DCD4] rounded-xl hover:bg-[#E3DCD4]/20 transition-all duration-400 border border-[#957D65]/30">
                            <ArrowUpRight size={18} />
                            <span className="font-medium">Send</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#E3DCD4]/10 text-[#E3DCD4] rounded-xl hover:bg-[#E3DCD4]/20 transition-all duration-400 border border-[#957D65]/30">
                            <History size={18} />
                        </button>
                    </div>
                </div>

                {/* Currency Wallets */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-serif font-medium text-[#E3DCD4]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Currency Wallets
                        </h3>
                        <span className="text-sm text-[#E3DCD4]/60">Enable currencies for your travels</span>
                    </div>

                    <div className="space-y-3">
                        {currencies.map((currency) => (
                            <div
                                key={currency.code}
                                className="flex items-center justify-between p-4 bg-[#E3DCD4]/10 rounded-xl border border-[#957D65]/20 hover:bg-[#E3DCD4]/15 transition-all duration-200"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-2xl">{currency.flag}</div>
                                    <div>
                                        <div className="flex items-center space-x-2 mb-1">
                                            {getCurrencyIcon(currency.code)}
                                            <span className="font-medium text-[#E3DCD4]" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                                                {currency.code}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#E3DCD4]/60">{currency.name}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="text-right">
                                        <div className="font-medium text-[#E3DCD4]" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                                            {formatBalance(currency.balance, currency.code)}
                                        </div>
                                        {currency.enabled && (
                                            <div className="text-xs text-[#957D65] flex items-center space-x-1">
                                                <Zap size={10} />
                                                <span>Active</span>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => toggleCurrency(currency.code)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${currency.enabled ? 'bg-[#957D65]' : 'bg-[#E3DCD4]/20'
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${currency.enabled ? 'translate-x-6' : 'translate-x-1'
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-serif font-medium text-[#E3DCD4]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Recent Activity
                        </h3>
                        <button className="text-sm text-[#957D65] hover:text-[#957D65]/80 transition-colors">
                            View All
                        </button>
                    </div>

                    <div className="space-y-3">
                        {recentTransactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="flex items-center justify-between p-4 bg-[#E3DCD4]/10 rounded-xl border border-[#957D65]/20 hover:bg-[#E3DCD4]/15 transition-all duration-200"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${transaction.type === 'payment' ? 'bg-red-500/20' : 'bg-green-500/20'
                                        }`}>
                                        {transaction.type === 'payment' ? (
                                            <ArrowUpRight size={18} className="text-red-400" />
                                        ) : (
                                            <ArrowDownLeft size={18} className="text-green-400" />
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-medium text-[#E3DCD4] mb-1" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                                            {transaction.description}
                                        </div>
                                        <div className="text-sm text-[#E3DCD4]/60">
                                            {new Date(transaction.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className={`font-medium ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                                        }`} style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                                        {transaction.amount > 0 ? '+' : ''}{formatBalance(Math.abs(transaction.amount), transaction.currency)}
                                    </div>
                                    <div className="text-xs text-[#E3DCD4]/60 uppercase tracking-wider">
                                        {transaction.status}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-6 bg-[#E3DCD4]/10 rounded-xl border border-[#957D65]/20 hover:bg-[#E3DCD4]/15 transition-all duration-200 cursor-pointer">
                        <div className="w-12 h-12 bg-[#957D65]/20 rounded-xl flex items-center justify-center mb-4">
                            <CreditCard size={24} className="text-[#957D65]" />
                        </div>
                        <h4 className="font-medium text-[#E3DCD4] mb-2" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                            Payment Methods
                        </h4>
                        <p className="text-sm text-[#E3DCD4]/60">Manage cards and bank accounts</p>
                    </div>

                    <div className="p-6 bg-[#E3DCD4]/10 rounded-xl border border-[#957D65]/20 hover:bg-[#E3DCD4]/15 transition-all duration-200 cursor-pointer">
                        <div className="w-12 h-12 bg-[#957D65]/20 rounded-xl flex items-center justify-center mb-4">
                            <Shield size={24} className="text-[#957D65]" />
                        </div>
                        <h4 className="font-medium text-[#E3DCD4] mb-2" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                            Security Settings
                        </h4>
                        <p className="text-sm text-[#E3DCD4]/60">Manage wallet security and limits</p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center py-8">
                    <p className="text-[#E3DCD4]/60 mb-6" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                        Please load your Wallet to request services
                    </p>
                    <div className="space-y-3">
                        <button className="w-full px-8 py-4 bg-[#957D65] text-[#E3DCD4] rounded-xl font-medium tracking-wider hover:scale-102 transition-all duration-400 shadow-lg shadow-[#957D65]/30 text-lg"
                            style={{ fontFamily: "'Avenir Next', sans-serif", letterSpacing: '0.5px' }}>
                            Add Funds
                        </button>
                        <button className="text-[#E3DCD4]/60 hover:text-[#E3DCD4] transition-colors underline text-sm">
                            Skip for now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}