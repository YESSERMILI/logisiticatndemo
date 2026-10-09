"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const logo = PlaceHolderImages.find(p => p.id === 'logistica-logo');

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            {logo && (
              <div className="relative h-12 w-48">
                <Image
                  src={logo.imageUrl}
                  alt="Logistica Tunisie"
                  fill
                  className="object-contain object-left"
                />
              </div>
            )}
            <p className="text-sm text-muted-foreground italic">
              « De la commande à la livraison, tout simplement. »
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">Logistique</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Gestion de stock</li>
              <li>Picking & Packing</li>
              <li>Expédition</li>
              <li>Cash on Delivery</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Fièrement Tunisien</li>
              <li>Service Client Dédié</li>
              <li>Partout en Tunisie</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Logistica Tunisie. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
