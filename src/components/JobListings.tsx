import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp,
  Users,
  Calendar,
  Mail
} from "lucide-react";
import { useCareers } from "@/hooks/useCareers";
import { Job } from "@/lib/careers";
import { useState } from "react";

const JobCard = ({ job }: { job: Job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
              {job.title}
            </CardTitle>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                {job.department}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {job.type}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(job.postedDate)}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Badge variant="secondary" className="w-fit">
              {job.department}
            </Badge>
            <Button 
              asChild 
              className="w-fit"
              onClick={(e) => e.stopPropagation()}
            >
              <a 
                href={job.applyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Apply Now
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {job.description}
        </p>
        
        <Button
          variant="ghost"
          className="w-full justify-between p-0 h-auto text-left hover:bg-transparent"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Show Less' : 'View Details'}
          </span>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>

        {isExpanded && (
          <div className="mt-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
            <Separator />
            
            {/* Responsibilities */}
            <div>
              <h4 className="font-semibold mb-3">What you'll do:</h4>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h4 className="font-semibold mb-3">What we're looking for:</h4>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to have */}
            {job.niceToHave.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Nice to have:</h4>
                <ul className="space-y-2">
                  {job.niceToHave.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Separator />
            
            <Button asChild className="w-full">
              <a 
                href={job.applyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Apply for this Position
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const JobListings = () => {
  const { jobs, loading, error, hasJobs } = useCareers();

  if (loading) {
    return (
      <section id="job-listings" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Loading job listings...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="job-listings" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-500">Error loading job listings: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="job-listings" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {hasJobs ? 'Join Our Team' : 'Careers'}
          </h1>
          {hasJobs ? (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're building the future of AI-powered development tools at Desktop Commander. 
              Help us connect file systems to Large Language Models and revolutionize developer workflows.
            </p>
          ) : (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay tuned for opportunities to join our team.
            </p>
          )}
        </div>

        {/* Job listings or empty state */}
        {hasJobs ? (
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <Card className="bg-muted/20 border-dashed border-2 border-muted-foreground/20">
              <CardContent className="p-12 md:p-16 text-center">
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary/60" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
                  <p className="text-muted-foreground text-lg mb-8">
                    We're building something amazing. Check back for opportunities to join our team.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm font-medium text-foreground">
                    Interested in our mission? We'd love to hear from you!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" asChild>
                      <a 
                        href="mailto:hello@desktopcommander.com" 
                        className="flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        Get in Touch
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a 
                        href="https://github.com/wonderwhy-er/DesktopCommanderMCP" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Check Our GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
