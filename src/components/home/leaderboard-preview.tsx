"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { friendsActivity } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Users } from "lucide-react";

export function FriendsActivity() {
  const { t } = useTranslation();
  
  return (
    <div>
        <div className="flex items-center justify-between mb-4">
             <h3 className="text-xl text-glow">
                {t('friends_activity')}
            </h3>
            <Users className="text-accent" />
        </div>
        <ul className="space-y-4">
            {friendsActivity.slice(0, 2).map(activity => {
                const avatarImage = PlaceHolderImages.find(p => p.id === activity.avatar);
                return (
                    <li key={activity.id} className="flex items-start gap-3">
                        <Avatar className="h-8 w-8 mt-1">
                            {avatarImage && <AvatarImage src={avatarImage.imageUrl} />}
                            <AvatarFallback>{activity.text.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm" dangerouslySetInnerHTML={{ __html: activity.text }}></p>
                            <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  );
}
