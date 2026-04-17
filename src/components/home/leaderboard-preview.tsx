"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { friendsActivity } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Users } from "lucide-react";

export function FriendsActivity() {
  const { t, language } = useTranslation();
  
  return (
    <Card className="glassmorphic h-full">
        <CardHeader>
             <CardTitle className="flex items-center gap-2 font-heading text-xl text-glow">
                <Users className="text-accent" />
                {t('friends_activity')}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-4">
                {friendsActivity.map(activity => {
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
        </CardContent>
    </Card>
  );
}
