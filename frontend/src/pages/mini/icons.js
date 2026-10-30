/**
 * Dars va vaziyat ikonkalari (nomi serverdan keladi: `icon: "Headphones"`).
 * Faqat kerakli ikonkalar import qilinadi — butun lucide to'plami emas.
 */
import {
  Backpack, BadgeAlert, Ban, BookOpen, Briefcase, CalendarX, Camera, Car, Clock, Database,
  DoorClosed, DoorOpen, Droplets, Eye, FileSignature, FileX, Gavel, GraduationCap, HandCoins,
  Heart, Hourglass, House, IdCard, KeyRound, Landmark, Laptop, Lock, LogOut, Megaphone, Milk,
  Network, Notebook, Palmtree, PiggyBank, Receipt, Scale, School, ScrollText, Search, Shield,
  ShieldAlert, ShieldCheck, ShoppingBag, ShoppingCart, Sparkles, Store, Tag, Truck, UserCheck,
  Users, Wrench,
} from "lucide-react";

export const ICONS = {
  Backpack, BadgeAlert, Ban, BookOpen, Briefcase, CalendarX, Camera, Car, Clock, Database,
  DoorClosed, DoorOpen, Droplets, Eye, FileSignature, FileX, Gavel, GraduationCap, HandCoins,
  Heart, Hourglass, House, IdCard, KeyRound, Landmark, Laptop, Lock, LogOut, Megaphone, Milk,
  Network, Notebook, Palmtree, PiggyBank, Receipt, Scale, School, ScrollText, Search, Shield,
  ShieldAlert, ShieldCheck, ShoppingBag, ShoppingCart, Sparkles, Store, Tag, Truck, UserCheck,
  Users, Wrench,
};

export const iconOf = (name, fallback = BookOpen) => ICONS[name] || fallback;
