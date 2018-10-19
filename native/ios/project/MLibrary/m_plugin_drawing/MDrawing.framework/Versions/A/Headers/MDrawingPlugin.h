//
//  MDrawingPlugin.h
//

#import <Foundation/Foundation.h>

@interface MDrawingPlugin : MPlugin

+ (MDrawingPlugin *)getInstance;

@end

#define PLUGIN_CLASS    MDrawingPlugin
#define PLUGIN_BUNDLE   @"MDrawing.bundle"

#define PGResource(res) [PLUGIN_BUNDLE appendPath:res]
#define PGLocalizedString(key, comment) [PLUGIN_CLASS localizedStringForKey:(key)]
